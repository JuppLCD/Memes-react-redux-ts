import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Meme } from '../../../types/Meme';

export interface MemeState {
	userMemes?: Meme[];
	publicMemes?: {
		expireTime: number;
		memes: Meme[];
	};
}

const initialState: MemeState = {
	userMemes: undefined,
	publicMemes: undefined,
};

export const memeSlice = createSlice({
	name: 'meme',
	initialState,
	reducers: {
		logoutUser: (state) => {
			state.userMemes = undefined;
			state.publicMemes = undefined;
		},
		setPublicMemes: (state, action: PayloadAction<Meme[]>) => {
			// 2 minutes
			const timeToExpire = 60000 * 2;
			state.publicMemes = { expireTime: new Date().getTime() + timeToExpire, memes: action.payload };
		},
		setUserMemes: (state, action: PayloadAction<Meme[]>) => {
			state.userMemes = action.payload;
		},
		userCreteMeme: (state, action: PayloadAction<Meme>) => {
			state.userMemes?.push(action.payload);

			if (action.payload.access === true) {
				state.publicMemes?.memes.unshift(action.payload);
			}
		},
		userDeleteMeme: (state, action: PayloadAction<string>) => {
			const memeToDelete = state.userMemes?.findIndex((meme) => meme.uuid === action.payload);

			if (memeToDelete && memeToDelete !== -1) {
				const deleteMeme = state.userMemes?.splice(memeToDelete, 1);

				// If Meme is public, DELETE in PublicMemes
				if (deleteMeme && deleteMeme[0].access === true) {
					const memePublicToDelete = state.publicMemes?.memes.findIndex((meme) => meme.uuid === deleteMeme[0].uuid);
					if (memePublicToDelete) state.publicMemes?.memes.splice(memePublicToDelete, 1);
				}
			}
		},
		userEditMeme: (state, action: PayloadAction<Meme>) => {
			const memeToEdit = state.userMemes?.findIndex((meme) => meme.uuid === action.payload.uuid);

			if (state.userMemes && memeToEdit && memeToEdit !== -1) {
				state.userMemes[memeToEdit] = action.payload;
			}
		},
	},
});

export const { logoutUser, setPublicMemes, setUserMemes, userCreteMeme, userDeleteMeme, userEditMeme } =
	memeSlice.actions;
