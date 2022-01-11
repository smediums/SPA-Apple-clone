import { useState } from "react"

const useFixedPos = (pos) => {
    const [fixed] = useState(pos)

    const position = {
        position: `${fixed}`,
    }

    return position
}

export default useFixedPos