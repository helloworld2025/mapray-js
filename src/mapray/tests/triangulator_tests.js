import Triangulator from "../Triangulator";


function
triangulator_tests()
{
    empty();
    triangle();
    triangle_error();
    square();
    pentagon_1();
    polygon_N();
    polygon_8();
    polygon_swirl();
    triangle_hole();
}


function
make_serial_indices( start, count )
{
    let array = new Uint32Array( count );
    for ( let i = 0; i < count; ++i ) {
        array[i] = start + i;
    }
    return array;
}


function
empty()
{
    let points = [];
    let tr = new Triangulator( points, 0, 2, points.length / 2 );
    tr.run();
}


function
triangle()
{
    let points = [
        0, 0,
        1, 0,
        0, 1
    ];
    let tr = new Triangulator( points, 0, 2, points.length / 2 );
    tr.addBoundary( make_serial_indices( 0, points.length / 2 ) );
    tr.run();
}


function
triangle_error()
{
    let points = [
        // 穴のみ
        0, 0,
        0, 1,
        1, 0
    ];
    let tr = new Triangulator( points, 0, 2, points.length / 2 );
    tr.addBoundary( make_serial_indices( 0, points.length / 2 ) );

    try {
        tr.run();
    }
    catch ( e ) {
        console.error( e.message );
    }
}


function
square()
{
    let points = [
        0, 0,
        1, 0,
        1, 1,
        0, 1
    ];
    let tr = new Triangulator( points, 0, 2, points.length / 2 );
    tr.addBoundary( make_serial_indices( 0, points.length / 2 ) );
    tr.run();
}


function
pentagon_1()
{
    let points = [
        0, 0,
        -1, 1,
        -1, -1,
        1, -1,
        1, 1
    ];
    let tr = new Triangulator( points, 0, 2, points.length / 2 );
    tr.addBoundary( make_serial_indices( 0, points.length / 2 ) );
    tr.run();
}


function
polygon_N()
{
    let points = [
        0.241667, 0.741667,
        0.319444, 0.133333,
        0.552778, 0.572222,
        0.838889, 0.186111,
        0.605556, 0.888889,
        0.4, 0.466667
    ];
    let tr = new Triangulator( points, 0, 2, points.length / 2 );
    tr.addBoundary( make_serial_indices( 0, points.length / 2 ) );
    tr.run();
}


function
polygon_8()
{
    let points = [
        0, 4,
        -3, 0,
        -2, 1,
        -1, 0,
        0, 2,  // この頂点から 3 対角線
        1, 0,
        2, 1,
        3, 0
    ];
    let tr = new Triangulator( points, 0, 2, points.length / 2 );
    tr.addBoundary( make_serial_indices( 0, points.length / 2 ) );
    tr.run();
}


function
polygon_swirl()
{
    let points = [
        0.31944444444444453, 0.8055555555555558,
        0.21111111111111117, 0.7055555555555557,
        0.17222222222222225, 0.536111111111111,
        0.22500000000000006,  0.3583333333333334,
        0.3222222222222223, 0.20833333333333348,
        0.4583333333333335, 0.13888888888888884,
        0.6166666666666668, 0.11944444444444446,
        0.8000000000000002, 0.1499999999999999,
        0.8916666666666668, 0.20000000000000018,
        0.9694444444444446, 0.2694444444444444,
        0.9833333333333336,  0.38611111111111107,
        0.9916666666666669, 0.5805555555555557,
        0.963888888888889, 0.7694444444444444,
        0.8250000000000002, 0.8722222222222222,
        0.6000000000000001, 0.9055555555555557,
        0.44444444444444453, 0.8805555555555558,
        0.4944444444444446, 0.8222222222222224,
        0.5750000000000002,  0.8333333333333335,
        0.6472222222222224, 0.8416666666666668,
        0.7361111111111113, 0.8222222222222224,
        0.8333333333333335, 0.7861111111111114,
        0.8861111111111113, 0.7333333333333334,
        0.916666666666667, 0.6055555555555556,
        0.9055555555555557, 0.5138888888888888,
        0.8972222222222224,  0.4083333333333332,
        0.8916666666666668, 0.3305555555555557,
        0.8888888888888891, 0.2944444444444443,
        0.8472222222222223, 0.25555555555555554,
        0.7805555555555558, 0.22222222222222232,
        0.7166666666666668, 0.21388888888888902,
        0.6666666666666669, 0.2055555555555557,
        0.5722222222222224,  0.22222222222222232,
        0.4833333333333334, 0.23888888888888893,
        0.44166666666666676, 0.26111111111111107,
        0.33333333333333337, 0.36111111111111116,
        0.2861111111111112, 0.49444444444444446,
        0.2694444444444445, 0.6277777777777778,
        0.3416666666666668, 0.6888888888888891,
        0.44166666666666676,  0.6916666666666669,
        0.5472222222222224, 0.7055555555555557,
        0.6833333333333335, 0.7111111111111112,
        0.8111111111111113, 0.6138888888888889,
        0.8083333333333335, 0.5416666666666665,
        0.8000000000000002, 0.4416666666666669,
        0.738888888888889, 0.3916666666666666,
        0.6555555555555557,  0.3833333333333333,
        0.5833333333333335, 0.39722222222222214,
        0.5083333333333334, 0.45277777777777795,
        0.4722222222222223, 0.5194444444444444,
        0.40833333333333344, 0.5555555555555558,
        0.3944444444444446, 0.5027777777777778,
        0.45000000000000007, 0.36388888888888893,
        0.7888888888888891,  0.2694444444444444,
        0.8611111111111114, 0.4083333333333332,
        0.8638888888888892, 0.552777777777778,
        0.8527777777777779, 0.6861111111111113,
        0.6805555555555557, 0.7972222222222225,
        0.48611111111111127, 0.7666666666666666
    ];
    let tr = new Triangulator( points, 0, 2, points.length / 2 );
    tr.addBoundary( make_serial_indices( 0, points.length / 2 ) );
    tr.run();
}


function
triangle_hole()
{
    let points = [
        // 外側
        0, 1,
        -1, 0,
        1, 0,
        // 内側
        0, 0.7,
        0.5, 0.3,
        -0.5, 0.3
    ];
    let tr = new Triangulator( points, 0, 2, points.length / 2 );
    tr.addBoundary( make_serial_indices( 0, 3 ) );
    tr.addBoundary( make_serial_indices( 3, 3 ) );
    tr.run();
}


export default triangulator_tests;
