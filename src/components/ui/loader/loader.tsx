import classes from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={classes.leader_wrapper}>
      <div className={classes.loader}/>
    </div>
  )
}
