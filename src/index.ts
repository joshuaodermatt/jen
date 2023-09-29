import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text(getHelloWorld()))

export default app




export function getHelloWorld(): string {
    return 'Hello World'
}
