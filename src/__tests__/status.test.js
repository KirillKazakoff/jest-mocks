import getLevel from '../getLevel';
import http from '../http';

jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});

test('fetchData parameter check', () => {
    http.mockReturnValue({
        status: 'not ok bruh',
    });
    const result = getLevel(1);

    expect(http).toBeCalledWith('https://server/user/1');
    expect(result).toEqual('Информация об уровне временно недоступна');
});

test('fetchData success', () => {
    http.mockReturnValue({
        status: 'ok',
        level: 1,
    });
    const result = getLevel(1);

    expect(result).toEqual('Ваш текущий уровень: 1');
});
