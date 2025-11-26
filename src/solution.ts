export function minimumCarsNeeded(P: number[], S: number[]): number {
    const totalPeople = P.reduce((sum, curr) => sum + curr, 0);
    const sortedSeats = [...S].sort((a, b) => b - a);

    let carsUsed = 0;
    let seatsAvailable = 0;

    for (const seats of sortedSeats) {
        seatsAvailable += seats;
        carsUsed++;

        if (seatsAvailable >= totalPeople) {
            return carsUsed;
        }
    }

    return carsUsed;
}
