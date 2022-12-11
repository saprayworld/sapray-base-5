import React from "react";
import PropTypes from 'prop-types';
// import clsx from 'clsx';

export default function BasicPlayer(props) {
  const {
    src,
  } = props;

  const [play, setPlay] = React.useState(false);
  const [audio] = React.useState(new Audio(src));

  function togglePlay() {
    setPlay(!play, () => {
      play ? audio.play() : audio.pause();
    })
  }

  React.useEffect(() => {
    audio.addEventListener('ended', () => setPlay(false));
    return () => {
      audio.removeEventListener('ended', () => setPlay(false));
    }

  }, [])

  return (
    <>
      <button onClick={togglePlay}>{play ? 'Pause' : 'Play'}</button>
    </>
  )
}

BasicPlayer.propTypes = {
  src: PropTypes.string.isRequired,
}

BasicPlayer.defaultProps = {
  src: null,
}

export class SaprayAudio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
    this.audio = new Audio(this.props.url)
  }


  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
      </div>
    );
  }
}

// export default SaprayAudio;