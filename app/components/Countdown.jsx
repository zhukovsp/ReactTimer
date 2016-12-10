var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

// var Countdown = (props) => {
//   return (
//     <div>
//       <h1 className="text-center page-title">Countdown.jsx</h1>
//     </div>
//   )
// };

var Countdown = React.createClass({
  getInitialState: function () {
    return {count: 0};
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count:seconds
    });
  },
  render: function () {
    var {count} = this.state;
    
    return (
      <div>
        <Clock totalSeconds={129}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
