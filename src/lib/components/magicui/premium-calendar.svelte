<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let className = '';
	export let selected: Date = new Date();

	let mounted = false;
	let currentMonth = 7; // August (0-indexed, so 7 = August)
	let currentYear = 2025;
	let isAnimating = false;

	// Booking density data for August 2025
	const bookingDensity = new Map([
		['2025-08-02', 'high'],
		['2025-08-03', 'high'],
		['2025-08-05', 'medium'],
		['2025-08-07', 'high'],
		['2025-08-09', 'medium'],
		['2025-08-10', 'high'],
		['2025-08-12', 'low'],
		['2025-08-14', 'high'],
		['2025-08-16', 'high'],
		['2025-08-17', 'medium'],
		['2025-08-19', 'high'],
		['2025-08-21', 'medium'],
		['2025-08-23', 'high'],
		['2025-08-24', 'high'],
		['2025-08-26', 'medium'],
		['2025-08-28', 'high'],
		['2025-08-30', 'medium'],
		['2025-08-31', 'high']
	]);

	// Calculate quick stats  
	$: totalBookings = 12; // Set to 12 bookings as requested
	$: occupancyRate = 78; // Set to 78% as requested
	$: totalRevenue = '2.4L';
	$: checkInsToday = 3;

	const monthNames = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	let calendarDays: Array<{
		date: number;
		fullDate: string;
		isCurrentMonth: boolean;
		isToday: boolean;
		isSelected: boolean;
		bookingLevel: string;
		hasBooking: boolean;
	}> = [];

	onMount(() => {
		if (browser) {
			mounted = true;
			generateCalendarDays();
			console.log('Premium Calendar mounted for', monthNames[currentMonth], currentYear);
		}
	});

	function generateCalendarDays() {
		const firstDay = new Date(currentYear, currentMonth, 1);
		const lastDay = new Date(currentYear, currentMonth + 1, 0);
		const firstDayWeekday = firstDay.getDay();
		const daysInMonth = lastDay.getDate();
		
		const days = [];
		const today = new Date();
		
		// Previous month days
		const prevMonth = new Date(currentYear, currentMonth - 1, 0);
		for (let i = firstDayWeekday - 1; i >= 0; i--) {
			const date = prevMonth.getDate() - i;
			const fullDate = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
			days.push({
				date,
				fullDate,
				isCurrentMonth: false,
				isToday: false,
				isSelected: false,
				bookingLevel: 'none',
				hasBooking: false
			});
		}
		
		// Current month days
		for (let date = 1; date <= daysInMonth; date++) {
			const fullDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
			const isToday = today.getFullYear() === currentYear && 
							today.getMonth() === currentMonth && 
							today.getDate() === date;
			const isSelected = selected.getFullYear() === currentYear && 
							  selected.getMonth() === currentMonth && 
							  selected.getDate() === date;
			const bookingLevel = bookingDensity.get(fullDate) || 'none';
			
			days.push({
				date,
				fullDate,
				isCurrentMonth: true,
				isToday,
				isSelected,
				bookingLevel,
				hasBooking: bookingLevel !== 'none'
			});
		}
		
		// Next month days to fill the grid
		const remainingDays = 42 - days.length;
		for (let date = 1; date <= remainingDays; date++) {
			const fullDate = `${currentYear}-${String(currentMonth + 2).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
			days.push({
				date,
				fullDate,
				isCurrentMonth: false,
				isToday: false,
				isSelected: false,
				bookingLevel: 'none',
				hasBooking: false
			});
		}
		
		calendarDays = days;
	}

	function navigateMonth(direction: 'prev' | 'next') {
		if (isAnimating) return;
		
		isAnimating = true;
		
		if (direction === 'next') {
			currentMonth++;
			if (currentMonth > 11) {
				currentMonth = 0;
				currentYear++;
			}
		} else {
			currentMonth--;
			if (currentMonth < 0) {
				currentMonth = 11;
				currentYear--;
			}
		}
		
		generateCalendarDays();
		
		setTimeout(() => {
			isAnimating = false;
		}, 300);
	}

	function selectDate(day: typeof calendarDays[0]) {
		if (!day.isCurrentMonth) return;
		
		selected = new Date(currentYear, currentMonth, day.date);
		generateCalendarDays();
	}
</script>

{#if mounted}
<div class="premium-calendar {className}">
	<div class="quick-stats">
		<div class="stat-item">
			<span class="stat-value">{occupancyRate}%</span>
			<span class="stat-label">occupied</span>
		</div>
		<div class="stat-separator">•</div>
		<div class="stat-item">
			<span class="stat-value">{totalBookings}</span>
			<span class="stat-label">bookings</span>
		</div>
		<div class="stat-separator">•</div>
		<div class="stat-item">
			<span class="stat-value">₹{totalRevenue}</span>
			<span class="stat-label">revenue</span>
		</div>
	</div>

	<div class="checkin-today">
		<div class="checkin-indicator">
			<div class="checkin-dot"></div>
			<span class="checkin-text">{checkInsToday} check-ins today</span>
		</div>
	</div>

	<div class="calendar-header">
		<button 
			class="nav-button prev" 
			on:click={() => navigateMonth('prev')}
			disabled={isAnimating}
		>
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
				<path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		
		<div class="month-year" class:animating={isAnimating}>
			<h3>{monthNames[currentMonth]} {currentYear}</h3>
		</div>
		
		<button 
			class="nav-button next" 
			on:click={() => navigateMonth('next')}
			disabled={isAnimating}
		>
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
				<path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
	</div>
	
	<div class="calendar-weekdays">
		{#each dayNames as dayName}
			<div class="weekday">{dayName}</div>
		{/each}
	</div>
	
	<div class="calendar-grid" class:animating={isAnimating}>
		{#each calendarDays as day, i}
			<button
				class="calendar-day"
				class:current-month={day.isCurrentMonth}
				class:today={day.isToday}
				class:selected={day.isSelected}
				class:has-booking={day.hasBooking}
				class:booking-high={day.bookingLevel === 'high'}
				class:booking-medium={day.bookingLevel === 'medium'}
				class:booking-low={day.bookingLevel === 'low'}
				style="--delay: {i * 0.01}s"
				on:click={() => selectDate(day)}
				disabled={!day.isCurrentMonth}
			>
				<span class="day-number">{day.date}</span>
				{#if day.hasBooking}
					<div class="booking-indicator">
						<div class="booking-dot"></div>
						{#if day.bookingLevel === 'high'}
							<div class="booking-pulse"></div>
						{/if}
					</div>
				{/if}
				{#if day.isToday}
					<div class="today-indicator"></div>
				{/if}
			</button>
		{/each}
	</div>
	
	<div class="calendar-legend">
		<div class="legend-item">
			<div class="legend-dot high"></div>
			<span>High demand</span>
		</div>
		<div class="legend-item">
			<div class="legend-dot medium"></div>
			<span>Medium</span>
		</div>
		<div class="legend-item">
			<div class="legend-dot low"></div>
			<span>Low</span>
		</div>
	</div>
</div>
{/if}

<style>
	.premium-calendar {
		position: absolute;
		top: 50px;
		right: 16px;
		left: 16px;
		bottom: 16px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		padding: 16px;
		backdrop-filter: blur(10px);
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: calc(100% - 32px);
		box-sizing: border-box;
	}

	.quick-stats {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		padding: 8px 12px;
		background: rgba(0, 255, 136, 0.05);
		border: 1px solid rgba(0, 255, 136, 0.2);
		border-radius: 8px;
		margin-bottom: 8px;
		width: 100%;
		box-sizing: border-box;
		min-height: 40px;
	}

	.stat-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		flex: 1;
		min-width: 0;
	}

	.stat-value {
		font-size: 0.8rem;
		font-weight: 700;
		color: #00ff88;
		font-variant-numeric: tabular-nums;
	}

	.stat-label {
		font-size: 0.55rem;
		color: rgba(255, 255, 255, 0.6);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 500;
	}

	.stat-separator {
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.8rem;
	}

	.checkin-today {
		display: flex;
		justify-content: center;
		margin-bottom: 8px;
	}

	.checkin-indicator {
		display: flex;
		align-items: center;
		gap: 6px;
		background: rgba(255, 165, 0, 0.1);
		border: 1px solid rgba(255, 165, 0, 0.3);
		border-radius: 12px;
		padding: 4px 8px;
	}

	.checkin-dot {
		width: 6px;
		height: 6px;
		background: #ffa500;
		border-radius: 50%;
		animation: checkin-pulse 2s ease-in-out infinite;
	}

	.checkin-text {
		font-size: 0.6rem;
		color: #ffa500;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.calendar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}

	.nav-button {
		width: 28px;
		height: 28px;
		border: none;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 6px;
		color: rgba(255, 255, 255, 0.8);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.nav-button:hover:not(:disabled) {
		background: rgba(0, 255, 136, 0.2);
		border-color: rgba(0, 255, 136, 0.4);
		color: #00ff88;
		transform: scale(1.1);
	}

	.nav-button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.month-year {
		text-align: center;
		transition: transform 0.3s ease;
	}

	.month-year.animating {
		transform: scale(0.95);
	}

	.month-year h3 {
		font-size: 0.8rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
		line-height: 1.2;
		text-align: center;
	}

	.calendar-weekdays {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 3px;
		margin-bottom: 6px;
	}

	.weekday {
		text-align: center;
		font-size: 0.55rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.6);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 3px;
	}

	.calendar-grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 3px;
		flex: 1;
		transition: opacity 0.3s ease;
		max-height: 140px;
	}

	.calendar-grid.animating {
		opacity: 0.7;
	}

	.calendar-day {
		position: relative;
		border: none;
		background: transparent;
		border-radius: 4px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 18px;
		max-height: 18px;
		font-size: 0.65rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.4);
		transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
		animation: fade-in 0.3s ease;
		animation-delay: var(--delay);
		z-index: 1;
		aspect-ratio: 1;
	}

	.calendar-day.current-month {
		color: rgba(255, 255, 255, 0.8);
	}

	.calendar-day.current-month:hover {
		background: rgba(0, 255, 136, 0.15);
		color: rgba(255, 255, 255, 1);
		transform: scale(1.15);
		box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
		z-index: 10;
	}

	.calendar-day.has-booking:hover {
		background: rgba(0, 255, 136, 0.25);
		border-color: rgba(0, 255, 136, 0.6);
		transform: scale(1.2);
		box-shadow: 0 6px 16px rgba(0, 255, 136, 0.4);
	}

	.calendar-day.today {
		background: rgba(0, 255, 136, 0.2);
		border: 1px solid rgba(0, 255, 136, 0.4);
		color: #00ff88;
		font-weight: 700;
	}

	.calendar-day.today .today-indicator {
		position: absolute;
		top: -1px;
		right: -1px;
		width: 4px;
		height: 4px;
		background: #00ff88;
		border-radius: 50%;
		animation: today-pulse 2s ease-in-out infinite;
		box-shadow: 0 0 6px rgba(0, 255, 136, 0.8);
	}

	.calendar-day.selected {
		background: rgba(0, 255, 136, 0.3);
		border: 2px solid #00ff88;
		color: #00ff88;
		font-weight: 700;
	}

	.calendar-day.has-booking {
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.calendar-day.booking-high {
		background: linear-gradient(135deg, rgba(255, 100, 100, 0.2) 0%, rgba(255, 50, 50, 0.1) 100%);
		border-color: rgba(255, 100, 100, 0.4);
	}

	.calendar-day.booking-medium {
		background: linear-gradient(135deg, rgba(255, 165, 0, 0.2) 0%, rgba(255, 140, 0, 0.1) 100%);
		border-color: rgba(255, 165, 0, 0.4);
	}

	.calendar-day.booking-low {
		background: linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 200, 100, 0.1) 100%);
		border-color: rgba(0, 255, 136, 0.4);
	}

	.day-number {
		position: relative;
		z-index: 2;
	}

	.booking-indicator {
		position: absolute;
		bottom: 1px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.booking-dot {
		width: 2px;
		height: 2px;
		border-radius: 50%;
		background: currentColor;
	}

	.booking-pulse {
		position: absolute;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		border: 1px solid currentColor;
		animation: booking-pulse 2s ease-in-out infinite;
	}

	.calendar-legend {
		display: flex;
		justify-content: center;
		gap: 8px;
		padding-top: 6px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		margin-top: 8px;
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 3px;
		font-size: 0.5rem;
		color: rgba(255, 255, 255, 0.6);
		font-weight: 500;
	}

	.legend-dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
	}

	.legend-dot.high { background: rgba(255, 100, 100, 0.8); }
	.legend-dot.medium { background: rgba(255, 165, 0, 0.8); }
	.legend-dot.low { background: rgba(0, 255, 136, 0.8); }

	/* Animations */
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: scale(0.8);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes today-pulse {
		0%, 100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.3);
			opacity: 0.7;
		}
	}

	@keyframes booking-pulse {
		0%, 100% {
			transform: translateX(-50%) scale(1);
			opacity: 0.8;
		}
		50% {
			transform: translateX(-50%) scale(1.5);
			opacity: 0.3;
		}
	}

	@keyframes checkin-pulse {
		0%, 100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.6;
			transform: scale(1.2);
		}
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.premium-calendar {
			padding: 12px;
			top: 40px;
		}

		.calendar-day {
			min-height: 16px;
			max-height: 16px;
			font-size: 0.6rem;
		}

		.month-year h3 {
			font-size: 0.75rem;
		}

		.weekday {
			font-size: 0.5rem;
		}

		.quick-stats {
			gap: 8px;
			padding: 6px 8px;
			min-height: 32px;
		}

		.stat-value {
			font-size: 0.7rem;
		}

		.stat-label {
			font-size: 0.5rem;
		}

		.checkin-text {
			font-size: 0.55rem;
		}
	}
</style>