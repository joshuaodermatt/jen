import { describe, expect, test } from "bun:test";
import { getHelloWorld } from './index'

describe("test", () => {
    test('getHelloWorld', () => {
        expect(getHelloWorld()).toEqual('Hello World')
    })
})
