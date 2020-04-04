import axios, { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { IMessage } from './types';
import getApiUrl from '../../api/config';

export function get(
  path: string,
): Promise<AxiosResponse<IMessage[]> | IMessage[]> {
  const url = `${getApiUrl()}${path}`;

  return axios({
    method: 'get',
    url,
  }).then((resp: { data: IMessage[] }) => resp.data);
}

export function* getAllChat(): SagaIterator {
  // eslint-disable-next-line no-console
  console.log('getallchat');
  const messages = yield call(get, '/allchat');
  yield put({ type: 'SET_MESSAGES', messages });
}
