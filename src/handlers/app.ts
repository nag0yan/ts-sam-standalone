export const handler = async () => {
	return getResponse(new Random());
};

export const getResponse = (r: IRandom) => {
    return `Hello from Lambda! Random: ${r.random()}`;
}

export interface IRandom {
    random: () => number;
}

class Random implements IRandom {
    random(): number {
        return Math.random();
    }
}
