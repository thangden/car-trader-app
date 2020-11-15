import axios from 'axios';

export * from './Car';
export * from './Faq';

export default axios.create({
	// baseURL: 'https://thangden-strapi.herokuapp.com',
});
