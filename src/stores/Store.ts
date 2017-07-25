import { Auth } from "../models/Auth";

export class Store {
    private auth = new Auth();

    get accountName():string {
        return this.auth.accountName;
    }

    get projectId(): string {
        return "b924d696-3eae-4116-8443-9a18392d8544";
    }
}