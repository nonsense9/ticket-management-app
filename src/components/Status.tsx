export const Status = ({status}: {status: boolean}) => {
  return <span>{status ? 'Completed': 'Uncompleted'}</span>
}
