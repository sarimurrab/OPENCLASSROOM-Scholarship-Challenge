//
//without function
import { tau, meldrum, clara } from './database.js';
const tauTitleText = tau.title;
const tauSeasonsText = tau.numberOfSeasons + ' seasons';
const tauEpisodesText = tau.episodesPerSeason + ' episodes per season';
const tauComponent = {
  titleText: tauTitleText,
  seasonsText: tauSeasonsText,
  episodesText: tauEpisodesText
};

const meldrumTitleText = meldrum.title;
const meldrumSeasonsText = meldrum.numberOfSeasons + ' seasons';
const meldrumEpisodesText = meldrum.episodesPerSeason + ' episodes per season';
const meldrumComponent = {
  titleText: meldrumTitleText,
  seasonsText: meldrumSeasonsText,
  episodesText: meldrumEpisodesText
};

const claraTitleText = clara.title;
const claraSeasonsText = clara.numberOfSeasons + ' seasons';
const claraEpisodesText = clara.episodesPerSeason + ' episodes per season';
const claraComponent = {
  titleText: claraTitleText,
  seasonsText: claraSeasonsText,
  episodesText: claraEpisodesText
};

const showComponents = [tauComponent, meldrumComponent, claraComponent];

export { showComponents };



//
// into this using function
import { tau, meldrum, clara } from './database.js';

const showComponent = (user) =>
{
		const titleText = user.title;
		const seasonsText = user.numberOfSeasons + ' seasons';
		const episodesText = user.episodesPerSeason + ' episodes per season';
		const component = {
	  titleText: titleText,
	  seasonsText: seasonsText,
	  episodesText: episodesText
                      };
    return component;
}

const tauComponent = showComponent(tau);
const meldrumComponent = showComponent(meldrum);
const claraComponent = showComponent(clara);


const showComponents = [tauComponent, meldrumComponent, claraComponent];

export { showComponents };

	