export interface GameDetails {
	description: string;
	image: string;
	name: string;
	url: string;
}

export interface GameMetadataResponse {
	[appid: string]: {
		success: boolean;
		data: {
			type: string;
			name: string;
			short_description: string;
			header_image: string;
		};
	};
}

export interface Props {
	/**
	 * Additional Steam appids to display as recently played.
	 * E.g., if the game was played on a platform besides Steam.
	 */
	adds: string[];
}

interface RecentlyPlayedGame {
	appid: number;
	name: string;
}

export interface RecentlyPlayedResponse {
	response: {
		total_count: number;
		games: RecentlyPlayedGame[];
	};
}
