import { Injectable } from '@nestjs/common';

import axios from 'axios';

import { getConfig } from 'src/config';

const { PING_URL_1 } = getConfig();

@Injectable()
export class PingService {
  constructor() {}

  async ping() {
    const res = await axios.get(PING_URL_1);
    return `PING successful! ==> ${res.data}`;
  }
}
