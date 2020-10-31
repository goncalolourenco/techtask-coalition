const baseUrl = process.env.REACT_APP_BASE_URL;

export const LOGIN_URL = `${baseUrl}/auth/login/`;
export const DATA_MAIL_URL = (email) => `${baseUrl}/v1/email/dataleaks?email=${email}`;
export const DATA_DOMAIN_URL = (domain) => `${baseUrl}/v1/domain/dataleaks?domain=${domain}`;
