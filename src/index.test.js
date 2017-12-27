import moxios from 'moxios'
import sinon from 'sinon'
import { getPost } from './index'

describe('getPost', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('should call printTitle with title as argument', (done) => {
    let fn = sinon.spy()
    getPost(1, fn)

    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          userId: 1,
          id: 1,
          title: 'This is title',
          body: 'This is body'
        }
      }).then(() => {
        expect(request.config.url).toEqual('https://jsonplaceholder.typicode.com/posts/1')
        expect(request.config.method).toEqual('get')
        expect(fn.firstCall.args[0]).toEqual('This is title')
        done()
      })
    })
  })
})
