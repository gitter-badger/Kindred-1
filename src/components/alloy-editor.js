import React from 'react'
import AlloyEditor from 'alloyeditor'
import { connect } from 'react-redux'

class AlloyEditorComponent extends React.Component {
  componentDidMount = () => {
    this._editor = AlloyEditor.editable(this.props.container);
  }

  componentWillUnmount = () => {
    this._editor.destroy();
  }

  render() {
    return (
      <div id={this.props.container}>
        <p><strong>Apollo 11</strong> was the spaceflight that landed the first humans, Americans <a href="http://en.wikipedia.org/wiki/Neil_Armstrong">Neil Armstrong</a> and <a href="http://en.wikipedia.org/wiki/Buzz_Aldrin">Buzz Aldrin</a>, on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the first to step onto the lunar surface 6 hours later on July 21 at 02:56 UTC.</p>

        <p>Armstrong spent about <s>three and a half</s> two and a half hours outside the spacecraft, Aldrin slightly less; and together they collected 47.5 pounds (21.5&nbsp;kg) of lunar material for return to Earth. A third member of the mission, <a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)">Michael Collins</a>, piloted the <a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module">command</a> spacecraft alone in lunar orbit until Armstrong and Aldrin returned to it for the trip back to Earth.</p>

        <h2>Broadcasting and <em>quotes</em> <a id="quotes" name="quotes"></a></h2>

        <p>Broadcast on live TV to a world-wide audience, Armstrong stepped onto the lunar surface and described the event as:</p>

        <blockquote>
            <p>One small step for [a] man, one giant leap for mankind.</p>
        </blockquote>
      </div>
    );
  }
}

export default connect()(AlloyEditorComponent)