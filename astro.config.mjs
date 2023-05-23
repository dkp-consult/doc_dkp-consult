import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config

export default defineConfig({
	integrations: [{
		site: 'https://dkp-consult.github.io', 
}],
	site: `https://astro.build`,
});
