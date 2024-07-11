import { HTTP_METHODS } from "../../../app/server_app/model/ServerModel"


export class RequestTestWrapper {

  public body: object = {};
  public method: HTTP_METHODS = HTTP_METHODS.GET;
  public url: string = '';
  public headers = {}

  public on(event: any, cb: any) {
    if (event == 'data') {
      cb(JSON.stringify(this.body));
    } else {
      cb()
    }
  }

  public clearFields() {
    this.body = undefined as any;
    this.method = undefined as any;
    this.url = undefined as any;
    this.headers = {};
  }
}