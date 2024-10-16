function paint_coordinates (){
    svg.innerHTML = `
        <line stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
        <line stroke="black" x1="150" x2="150" y1="0" y2="300"></line>
        <polygon fill="black" points="150,0 144,15 156,15" stroke="black"></polygon>
        <polygon fill="black" points="300,150 285,156 285,144" stroke="black"></polygon>
                
        <!-- lines on lines -->
        <line stroke="black" x1="${center + baseR / 2}" x2="${center + baseR / 2}" y1="155" y2="145"></line>
        <line stroke="black" x1="${center + baseR}" x2="${center + baseR}" y1="155" y2="145"></line>

        <line stroke="black" x1="${center - baseR}" x2="${center - baseR}" y1="155" y2="145"></line>
        <line stroke="black" x1="${center - baseR / 2}" x2="${center - baseR / 2}" y1="155" y2="145"></line>

        <line stroke="black" x1="145" x2="155" y1="${center - baseR / 2}" y2="${center - baseR / 2}"></line>
        <line stroke="black" x1="145" x2="155" y1="${center - baseR}" y2="${center - baseR}"></line>

        <line stroke="black" x1="145" x2="155" y1="${center + baseR / 2}" y2="${center + baseR / 2}"></line>
        <line stroke="black" x1="145" x2="155" y1="${center + baseR}" y2="${center + baseR}"></line>

        <!-- Rs and X, Y -->
        <text fill="black" x="${center + baseR - 5}" y="140">R</text>

        <text fill="black" x="${center - baseR - 8}" y="140">-R</text>

        <text fill="black" x="160" y="${center - baseR + 5}">R</text>

        <text fill="black" x="160" y="${center + baseR + 3}">-R</text>

        <text fill="black" x="285" y="140">X</text>
        <text fill="black" x="160" y="15">Y</text>

        <polygon points="150,150 ${center + baseR},150 150,${center - baseR / 2}" fill-opacity="0.4" stroke="navy" fill="blue"></polygon>

        <rect x="${center - baseR}" y="${center - baseR}" width="${baseR}" height="${baseR}" fill-opacity="0.4" stroke="navy" fill="blue"></rect>

        <path d="M 150 150 L 150 ${center + baseR} A${baseR},${baseR} 0 0,1 ${center - baseR},150 Z" fill-opacity="0.4" stroke="navy"
              fill="blue"></path>
        `
}