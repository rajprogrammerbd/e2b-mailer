export interface RequestEmailSendBodyType {
    to: string;
    title: string;
    html?: string;
    text?: string;
}