import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const GpaGeneral = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    const downloadSVG = () => {
        if (svgRef.current) {
            const svg = svgRef.current;
            const serializer = new XMLSerializer();
            const source = serializer.serializeToString(svg);

            const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(svgBlob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'gpa_general.svg';
            link.click();

            URL.revokeObjectURL(url);
        }
    };

    useEffect(() => {
        if (svgRef.current) {
            const svg = d3
                .select(svgRef.current)
                .attr('viewBox', '0 0 1010 220')
                .attr('width', 1010)
                .attr('height', 220);

            svg.append('path')
                .attr('d', 'M6.5,0.5 L6.5,142.5 0.5,136.75 0.5,7 z')
                .attr('transform', 'translate(0, 21)')
                .attr('width', 7)
                .attr('height', 143)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M0.5,0.5 C4.527418,2.1375216 4.7134647,6.6353859 11.25,9.25 16.25,11.25 19.75,9.75 23.25,9.75 23.25,44.25 23.25,113.25 23.25,113.25 23.25,113.25 15.25,112.5 9.75,115.5 0.70085956,120.43589 4.4134715,120.90881 0.5,122.5 0.5,122.5 0.5,0.5 0.5,0.5 z',
                )
                .attr('transform', 'translate(6.23, 30.75)')
                .attr('width', 23.75)
                .attr('height', 123)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 29.5)
                .attr('y', 41)
                .attr('width', 102.5)
                .attr('height', 103)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 132)
                .attr('y', 38)
                .attr('width', 23)
                .attr('height', 109)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M0.5,0.5 L16.583,0.5 24.833,6.5 24.833,95 16.333,100.5 0.5,100.5 z')
                .attr('transform', 'translate(154.667, 42)')
                .attr('width', 25.333)
                .attr('height', 101)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M137.75,147.375 L141,152.625 160.125,152.625 164.625,143 C153.65684,137.52652 144.66892,138.88282 137.75,147.375 z',
                )
                .attr('transform', 'translate(0, -0)')
                .attr('width', 27.875)
                .attr('height', 13.895)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 142)
                .attr('y', 152)
                .attr('width', 18)
                .attr('height', 49)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 122)
                .attr('y', 153)
                .attr('width', 20)
                .attr('height', 35)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 100)
                .attr('y', 168)
                .attr('width', 22)
                .attr('height', 15)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 70)
                .attr('y', 170)
                .attr('width', 155)
                .attr('height', 11)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M0.5,0.5 L6.5,2.6666667 6.5,18.166667 0.5,20.5 z')
                .attr('transform', 'translate(160, 165)')
                .attr('width', 7)
                .attr('height', 21)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M9.5,0.5 L9.5,20.5 0.5,18.333333 0.5,2.6666667 z')
                .attr('transform', 'translate(167, 165)')
                .attr('width', 10)
                .attr('height', 21)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 177)
                .attr('y', 153)
                .attr('width', 11)
                .attr('height', 48)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 188)
                .attr('y', 164)
                .attr('width', 17)
                .attr('height', 21)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 95)
                .attr('y', 201)
                .attr('width', 420)
                .attr('height', 19)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 180)
                .attr('y', 48)
                .attr('width', 15)
                .attr('height', 89)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 195)
                .attr('y', 50)
                .attr('width', 30)
                .attr('height', 85)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M0.5,0.5 L9.5,7.5 9.5,77.5 0.5,84.5 z')
                .attr('transform', 'translate(225, 50)')
                .attr('width', 10)
                .attr('height', 85)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 235)
                .attr('y', 58)
                .attr('width', 35)
                .attr('height', 69)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M3.7500013,0.5 L13.750002,0.5 13.750002,6.4999998 16.500001,6.4999998 16.500001,110.5 13.750002,110.5 13.750002,116.5 3.7500013,116.5 3.7500013,110.5 0.5,110.5 0.5,6.4999998 3.7500013,6.4999998 z',
                )
                .attr('transform', 'translate(243, 34)')
                .attr('width', 17)
                .attr('height', 117)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M0.5,0.5 L24.5,4.3333333 24.5,64.833333 0.5,68.5 z')
                .attr('transform', 'translate(270, 58)')
                .attr('width', 25)
                .attr('height', 69)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 276)
                .attr('y', 28)
                .attr('width', 8)
                .attr('height', 129)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M0.5,0.5 L29.5,3.5 29.5,69.833333 0.5,72.5 z')
                .attr('transform', 'translate(295, 56)')
                .attr('width', 30)
                .attr('height', 73)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M5.3339999,0.5 L14.667,0.5 14.667,10 16.832999,10 16.832999,27.5 19.665999,27.5 19.665999,30.833 16.832999,30.833 16.832999,35.5 14.667,35.5 14.667,44.5 5.3339999,44.5 5.3339999,35.5 3.6669998,35.5 3.6669998,30.833 0.5,30.833 0.5,27.5 3.6669998,27.5 3.6669998,10 5.3339999,10 z',
                )
                .attr('transform', 'translate(293.166, 15)')
                .attr('width', 20.166)
                .attr('height', 45)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M39.5,0.5 L39.5,88.5 0.5,80.666667 0.5,8.5 z')
                .attr('transform', 'translate(325, 48)')
                .attr('width', 40)
                .attr('height', 89)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M44.5,0.5 L44.5,104.5 C31.730465,97.737412 17.039816,94.391171 0.5,94.333333 0.5,66.444444 0.5,38.555556 0.5,10.666667 16.461844,11.171368 31.46872,8.8052261 44.5,0.5 z',
                )
                .attr('transform', 'translate(365, 40)')
                .attr('width', 45)
                .attr('height', 105)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M4.3330001,0.5 L7.3329999,0.5 7.3329999,9.1669998 9.1659997,9.1669998 9.1659997,18.167 11.333,18.167 11.333,29.834 9.1659997,29.834 9.1659997,38.667 7.3329999,38.667 7.3329999,46.167 4.3330001,46.167 4.3330001,38.667 2.3329999,38.667 2.3329999,29.834 0.5,29.834 0.5,18.167 2.3329999,18.167 2.3329999,9.1669998 4.3330001,9.1669998 z',
                )
                .attr('transform', 'translate(373.167, 69.166)')
                .attr('width', 11.833)
                .attr('height', 46.667)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M3.1663334,0.5 L8.9996674,0.5 11.160893,15.167 11.333,15.167 11.333,16.334999 11.333,30.167 0.5,30.167 0.5,16.334999 0.5,15.167 0.69667038,15.167 z',
                )
                .attr('transform', 'translate(373.167, 40)')
                .attr('width', 11.833)
                .attr('height', 30.667)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M0.5,0.5 L11.333,0.5 11.333,12.667 11.333,14.167 11.133001,14.167 8.9996664,30.167 3.1663334,30.167 0.72854289,14.167 0.5,14.167 0.5,12.667 z',
                )
                .attr('transform', 'translate(373.167, 114.333)')
                .attr('width', 11.833)
                .attr('height', 30.667)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 410)
                .attr('y', 40)
                .attr('width', 10)
                .attr('height', 105)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M11.5,0.5 L11.5,120.5 C6.9025367,120.21772 3.3857426,117.29613 0.5,112.83333 L0.5,8.5 C3.0458732,4.6465415 6.6630021,1.92742 11.5,0.5 z',
                )
                .attr('transform', 'translate(420, 32)')
                .attr('width', 12)
                .attr('height', 121)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M11.5,2.6666982 L11.5,137.49996 C9.2743748,132.97162 5.6544439,131.14242 0.5,129.83306 L0.5,9.3333333 C5.8183086,9.4287342 9.3828482,8.5706991 11.5,2.6666982 z',
                )
                .attr('transform', 'translate(432, 25.171)')
                .attr('width', 12)
                .attr('height', 135.827)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M0.5,0.5 C10.333333,4 65.333333,6 75.5,0.5 L75.5,138.5 C60.333333,135 18,135.33333 0.5,138.5 z',
                )
                .attr('transform', 'translate(444, 23)')
                .attr('width', 76)
                .attr('height', 139)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 498)
                .attr('y', 23)
                .attr('width', 8)
                .attr('height', 139)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M461.75,98.75 L484,98.75 C479,82.99908 468,81.999238 461.75,98.75 z')
                .attr('transform', 'translate(0, 0)')
                .attr('width', 23.25)
                .attr('height', 13.19)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 462)
                .attr('y', 98.5)
                .attr('width', 23)
                .attr('height', 66)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('ellipse')
                .attr('cx', 473)
                .attr('cy', 92)
                .attr('rx', 3)
                .attr('ry', 3)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M8.75,0.5 L26.25,0.5 34.5,12.5 0.5,12.5 z')
                .attr('transform', 'translate(456.25, 164)')
                .attr('width', 35)
                .attr('height', 13)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 456.25)
                .attr('y', 177)
                .attr('width', 35)
                .attr('height', 24)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M94.5,0.5 L94.5,184.5 C89.574702,177.04145 84.658328,172.38324 79.75,170.25 L0.5,152 0.5,33 79.75,15.5 C84.568711,13.992625 89.496306,8.6029686 94.5,0.5 z',
                )
                .attr('transform', 'translate(520, 0)')
                .attr('width', 95)
                .attr('height', 185)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M14.5,0.5 L14.5,84.5 0.5,81.5 0.5,3.5 z')
                .attr('transform', 'translate(615, 50)')
                .attr('width', 15)
                .attr('height', 85)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M0.5,0.5 L69.5,3.5 69.5,47.75 0.5,50.5 z')
                .attr('transform', 'translate(630, 67)')
                .attr('width', 65)
                .attr('height', 51)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 695)
                .attr('y', 65)
                .attr('width', 20)
                .attr('height', 55)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr('d', 'M29.5,0.5 L29.5,50.5 0.5,48.25 0.5,3 z')
                .attr('transform', 'translate(715, 67)')
                .attr('width', 65)
                .attr('height', 51)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 745)
                .attr('y', 60)
                .attr('width', 20)
                .attr('height', 65)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 765)
                .attr('y', 52)
                .attr('width', 7)
                .attr('height', 81)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 772)
                .attr('y', 30)
                .attr('width', 162)
                .attr('height', 125)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 934)
                .attr('y', 26)
                .attr('width', 16)
                .attr('height', 133)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 950)
                .attr('y', 60)
                .attr('width', 60)
                .attr('height', 67)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M771.66667,179.83333 L779.33302,154.33366 785.33359,154.33366 784.00053,159.5006 809.3356,159.5006 809.3356,154.33399 813.83629,154.33399 813.83629,179.83366 809.33625,179.83366 809.33625,163.00055 783.33402,163.00055 779.167,179.83366 z',
                )
                .attr('transform', 'translate(0, 2)')
                .attr('width', 43.166)
                .attr('height', 26.5)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('path')
                .attr(
                    'd',
                    'M894.5,180.16666 L894.5,154.16699 898.5,154.16699 898.5,159.33339 923.83333,159.33339 923.16697,154.16666 928.8337,154.16666 937.00084,179.83365 929.00069,179.83365 924.83394,162.66654 898.66675,162.66654 898.66675,180.16699 z',
                )
                .attr('transform', 'translate(0, 2)')
                .attr('width', 43.5)
                .attr('height', 27)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 887)
                .attr('y', 180)
                .attr('width', 56.333)
                .attr('height', 10)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 765)
                .attr('y', 180)
                .attr('width', 56.333)
                .attr('height', 10)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('rect')
                .attr('x', 760)
                .attr('y', 190)
                .attr('width', 190)
                .attr('height', 30)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('ellipse')
                .attr('cx', 880)
                .attr('cy', 90)
                .attr('rx', 25)
                .attr('ry', 25)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');

            svg.append('ellipse')
                .attr('cx', 880)
                .attr('cy', 90)
                .attr('rx', 20)
                .attr('ry', 20)
                .attr('fill', 'darkgray')
                .attr('stroke', 'black');
        }
    }, []);

    return (
        <div>
            <svg ref={svgRef} />
            <button onClick={downloadSVG}>Download as SVG</button>
        </div>
    );
};

export default GpaGeneral;
