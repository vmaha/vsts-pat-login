export class Auth {

    private readonly localStorageKeys = {
        accountName: "login_account_name",
        personalAccessToken: "login_personal_access_token",
    };

    public get accountName(): string {
        return localStorage.getItem(this.localStorageKeys.accountName);
    }

    public set accountName(newValue: string) {
        localStorage.setItem(this.localStorageKeys.accountName, newValue);
    }

    public get personalAccessToken(): string {
        return localStorage.getItem(this.localStorageKeys.personalAccessToken);
    }

    public set personalAccessToken(newValue: string) {
        localStorage.setItem(this.localStorageKeys.personalAccessToken, newValue);
    }

    public needsCredentials(): boolean {        
        return (
            this.accountName == null || 
            this.personalAccessToken == null
        );
    }

    public loginIfNeeded() {
        if (this.needsCredentials()) {
            window.location.href = `/login?redirectUrl=${window.location.href}`;
        }
    }
}