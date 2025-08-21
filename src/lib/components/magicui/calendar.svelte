<script lang="ts">
	export let className = '';
	export let selected: Date = new Date();

	const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
	
	// Sample calendar data for property management
	const calendarDays = [
		{ date: 15, status: 'booked', booking: 'Villa Sunset' },
		{ date: 16, status: 'available' },
		{ date: 17, status: 'booked', booking: 'Beach House' },
		{ date: 18, status: 'booked', booking: 'City Apartment' },
		{ date: 19, status: 'available' },
		{ date: 20, status: 'pending', booking: 'Garden Suite' },
		{ date: 21, status: 'available' },
		{ date: 22, status: 'booked', booking: 'Luxury Condo' },
	];
</script>

<div class="calendar {className}">
	<div class="calendar-header">
		<h3 class="calendar-title">{currentMonth}</h3>
	</div>
	
	<div class="calendar-grid">
		<div class="calendar-weekdays">
			<div class="weekday">Su</div>
			<div class="weekday">Mo</div>
			<div class="weekday">Tu</div>
			<div class="weekday">We</div>
			<div class="weekday">Th</div>
			<div class="weekday">Fr</div>
			<div class="weekday">Sa</div>
		</div>
		
		<div class="calendar-days">
			{#each calendarDays as day}
				<div class="calendar-day {day.status}" title={day.booking || day.status}>
					<span class="day-number">{day.date}</span>
					{#if day.booking}
						<div class="booking-dot"></div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	
	<div class="calendar-legend">
		<div class="legend-item">
			<div class="legend-dot booked"></div>
			<span>Booked</span>
		</div>
		<div class="legend-item">
			<div class="legend-dot available"></div>
			<span>Available</span>
		</div>
		<div class="legend-item">
			<div class="legend-dot pending"></div>
			<span>Pending</span>
		</div>
	</div>
</div>

<style>
	.calendar {
		background: var(--bg-secondary);
		border: 1px solid var(--border-medium);
		border-radius: 8px;
		padding: 1rem;
		font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
	}

	.calendar-header {
		text-align: center;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--border-subtle);
	}

	.calendar-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.calendar-weekdays {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 2px;
		margin-bottom: 0.5rem;
	}

	.weekday {
		text-align: center;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--text-secondary);
		padding: 0.5rem 0.25rem;
	}

	.calendar-days {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 2px;
	}

	.calendar-day {
		position: relative;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		font-size: 0.8125rem;
		font-weight: 500;
		transition: all 0.2s ease;
		cursor: pointer;
	}

	.calendar-day:hover {
		transform: scale(1.05);
	}

	.calendar-day.booked {
		background: rgba(239, 68, 68, 0.2);
		color: #ef4444;
		border: 1px solid rgba(239, 68, 68, 0.3);
	}

	.calendar-day.available {
		background: rgba(16, 185, 129, 0.2);
		color: #10b981;
		border: 1px solid rgba(16, 185, 129, 0.3);
	}

	.calendar-day.pending {
		background: rgba(245, 158, 11, 0.2);
		color: #f59e0b;
		border: 1px solid rgba(245, 158, 11, 0.3);
	}

	.booking-dot {
		position: absolute;
		top: 2px;
		right: 2px;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: currentColor;
		opacity: 0.7;
	}

	.calendar-legend {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--border-subtle);
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		font-size: 0.75rem;
		color: var(--text-secondary);
	}

	.legend-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.legend-dot.booked {
		background: #ef4444;
	}

	.legend-dot.available {
		background: #10b981;
	}

	.legend-dot.pending {
		background: #f59e0b;
	}
</style>