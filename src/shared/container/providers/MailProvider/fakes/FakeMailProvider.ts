import IMailprovider from '../models/IMailProvider';
import ISendEmailDTO from '../dtos/ISendMailDTO';

export default class FakeMailProvider implements IMailprovider {
  private messages: ISendEmailDTO[] = [];

  public async sendMail(message: ISendEmailDTO): Promise<void> {
    this.messages.push(message);
  }
}
