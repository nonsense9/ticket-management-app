export const Status = ({completed}: {completed: boolean}) => {
  return <span>{completed ? 'Completed': 'Uncompleted'}</span>
}
