function log(...msg) {
  // console.log(...msg)
}

function run(meets) {
  const sortedMeets = meets.map(s => s.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0])
  console.log('sortedMeets', sortedMeets)

  const rooms = [[]]

  function verifyConflicts(meet, vRooms, indexRoom) {
    if (!rooms[indexRoom]?.length) {
      rooms[indexRoom].push(meet)
      log(meet, 'insert in room', indexRoom)
      return
    }

    for (let i = 0; i < rooms[indexRoom].length; i++) {
      if (rooms[indexRoom].includes(meet)) {
        log('meet', meet, 'already in room', indexRoom)
        break
      }

      if (
        (vRooms[indexRoom][i][0] < meet[0] && meet[0] < vRooms[indexRoom][i][1]) ||
        (vRooms[indexRoom][i][0] < meet[1] && meet[1] < vRooms[indexRoom][i][1])
      ) {
        if (!rooms[indexRoom + 1]) {
          rooms[indexRoom + 1] = []
          log(meet, 'conflict with', vRooms[indexRoom][i], '=> new room =>', indexRoom + 1)
        } else {
          log(meet, 'conflict with', vRooms[indexRoom][i], '=> next room =>', indexRoom + 1)
        }
        verifyConflicts(meet, vRooms, indexRoom + 1)
      } else {
        rooms[indexRoom].push(meet)
        log('no conflict => same room', indexRoom)
      }
    }
  }

  for (let i = 0; i < sortedMeets.length; i++) {
    const vRoom = [...rooms]
    for (let o = 0; o < vRoom.length; o++) {
      verifyConflicts(sortedMeets[i], vRoom, o)
    }
  }

  log('rooms:', {...rooms})

  console.log('neededRooms', rooms.length)

  return rooms.length
}

// run([[5, 10], [0, 30], [20, 15]])
// run( [[ 15, 25 ], [ 25, 50 ]])
run([[0, 20], [10, 30], [15, 40]])

module.exports = {run}