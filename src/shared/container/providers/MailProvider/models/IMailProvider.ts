import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(ata: ISendMailDTO): Promise<void>;
}
