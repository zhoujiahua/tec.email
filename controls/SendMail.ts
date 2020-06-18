import { EmailOptionType } from './../config/DataType';
import { fetch, post } from './../controls/RequestHttp';
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
    sendMailContent() {
        const content = {
            id_user: this.userID,
            subject: this.setErrorSubject(),
            message: this.setErrorBody()
        };
        return new Promise(async (resolve, reject) => {
            try {
                let d = await post('/manage/v1/user/send_mail', content);
                return resolve(d);
            } catch (error) {
                console.error(error);
                return reject(error);
            }
        })
    }
}