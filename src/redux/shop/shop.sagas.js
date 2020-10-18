import {takeEvery} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

export function* fetchCOllectionsAsync() {
    yield console.log('Estoy despedido');
};

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCOllectionsAsync
    );
};