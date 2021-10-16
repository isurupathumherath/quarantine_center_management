import React from "react";

const statesShow = ({ Inquary_states }) => {
    if (Inquary_states == 'Pending') {
        return (
            <span
                style={{
                    marginLeft: '50%',
                    padding: '11px',
                    borderRadius: '8px',
                    backgroundColor: '#ffbc34',
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                Inquary states : {Inquary_states}
            </span>
        )
    } else if (Inquary_states === 'Working on') {
        return (
            <span
                style={{
                    marginLeft: '50%',
                    padding: '11px',
                    borderRadius: '8px',
                    backgroundColor: '#009efb',
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                Inquary states : {Inquary_states}
            </span>
        )
    } else if (Inquary_states === 'Completeted') {
        return (
            <span
                style={{
                    marginLeft: '50%',
                    padding: '11px',
                    borderRadius: '8px',
                    backgroundColor: '#00e65b',
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                Inquary states : {Inquary_states}
            </span>
        )
    } else {
        return (
            <span
                style={{
                    marginLeft: '50%',
                    padding: '11px',
                    borderRadius: '8px',
                    backgroundColor: 'yellow',
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                Inquary states : {Inquary_states}
            </span>
        )
    }
}

export default statesShow;