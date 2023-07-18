const { APS_APP_NAME, APS_CLIENT_ID, APS_CLIENT_SECRET, HOST_URL, APS_CALLBACK_URL, SENDGRID_API_KEY, SERVER_SESSION_SECRET,CLI_CONFIG_PASSWORD } = process.env;
const INTERNAL_TOKEN_SCOPES = ['viewables:read', 'bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write','account:read']
const PUBLIC_TOKEN_SCOPES = ['viewables:read'];
var credentials = {
    token_3legged:''
}

module.exports = {
    app_name: APS_APP_NAME,
    client_id: APS_CLIENT_ID,
    client_secret: APS_CLIENT_SECRET,
    host_url: HOST_URL,
    sendgrid_key: SENDGRID_API_KEY,
    callback_url: APS_CALLBACK_URL,
    CLI_CONFIG_PASSWORD,
    scopes: INTERNAL_TOKEN_SCOPES,
    redirect_uri: `${HOST_URL}/auth/callback`,
    INTERNAL_TOKEN_SCOPES,
    PUBLIC_TOKEN_SCOPES,
    credentials,
    SERVER_SESSION_SECRET
};
