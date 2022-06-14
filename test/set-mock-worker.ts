import { RequestHandler, ResponseFunction, rest, RestContext } from "msw"
import { setupServer } from "msw/node"


function set_mock_worker(ents_mocks: any) {
  const rest_handlers_arr: [] = []

  Object.keys(ents_mocks).forEach((ent_name) => {
    const mock_data_http_methods_details = ents_mocks[ent_name]

    Object.keys(mock_data_http_methods_details).forEach((http_method) => {
      const mock_data = mock_data_http_methods_details[http_method]

      rest_handlers_arr.push(rest_handler(rest[http_method], mock_data))
    })
  })
  return setupServer(...rest_handlers_arr)
}

function rest_handler(cb: CallableFunction, mock: any) {
  return cb("https://ob.nordigen.com/api/v2" + mock.url, (req: RequestHandler, res: ResponseFunction, ctx: RestContext) => {
    return res(ctx.json(mock.mock_data))
  })
}

export { set_mock_worker }

