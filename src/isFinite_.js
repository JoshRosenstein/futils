export default value=>!(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity)
