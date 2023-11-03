import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import { Dispatch } from '@reduxjs/toolkit'
import { userActions } from 'entities/user'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('', () => {
  // !!! Tests without class TestAsyncThunk

  // определяем типы
  // let dispatch: Dispatch
  // let getState: () => StoreSchema

  // // присваиваме функции перед каждым вызовом теста
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  // test('logIn with success', async () => {
  //   const userData = { username: 'admin', id: '1' }
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))

  //   const action = loginByUsername({ username: 'admin', password: 'password' })
  //   const result = await action(dispatch, getState, undefined)

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setUserData(userData))
  //   expect(dispatch).toHaveBeenCalledTimes(3)

  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.payload).toEqual(userData)
  // })

  // test('logIn with error', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

  //   const action = loginByUsername({ username: 'admin', password: 'password' })
  //   const result = await action(dispatch, getState, undefined)

  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(mockedAxios.post).toHaveBeenCalled()

  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toEqual('error')
  // })

  test('logIn with success', async () => {
    const userData = { username: 'admin', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({
      username: 'admin',
      password: 'password',
    })

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setUserData(userData)
    )
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userData)
  })

  test('logIn with error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({
      username: 'admin',
      password: 'password',
    })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
