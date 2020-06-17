import { EmailOptionType } from './../config/DataType';
export class SendMail {
    userID?: string;
    userName: string;
    errorType: string;
    errorBody: string;
    constructor(data: EmailOptionType) {
        this.userID = data.userID;
        this.userName = data.userName;
        this.errorType = data.errorType;
        this.errorBody = data.errorBody;
    }
    setErrorSubject(): string {
        return `${this.errorType}-${this.userName}`;
    }
    setErrorBody(): string {
        return `Error information:${this.errorBody}`;
    }
}