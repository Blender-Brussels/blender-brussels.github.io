"use strict"

if (b4w.module_check("nlas_main"))
    throw "Failed to register module: nlas_main";

b4w.register( "nlas_main", function( exports, require ) {

	var m_anim  = require("animation");
	var m_app   = require("app");
	var m_main  = require("main");
	var m_data  = require("data");
	var m_ctl   = require("controls");
	var m_phy   = require("physics");
	var m_cons  = require("constraints");
	var m_scenes= require("scenes");
	var m_trans = require("transform");
	var m_cfg   = require("config");

	var ROT_SPEED = 1.5;
	var CAMERA_OFFSET = new Float32Array([0, 1.5, -4]);

	var _my_cube = null;
	var _my_sphere = null;

	var _mouse_span = null;
	var _info_span = null;

	exports.init = function() {
		m_app.init({
		    canvas_container_id: "canvas3d",
		    callback: init_cb,
		    physics_enabled: true,
		    show_fps: true,
		    alpha: true,
		    physics_uranium_path: "uranium.js"
		});
	}

	function init_cb( canvas_elem, success ) {

		if (!success) {
		    console.log("b4w init failure");
		    return;
		}

		m_app.enable_controls( canvas_elem );

		canvas_elem.addEventListener( "mousedown", main_canvas_click, false );
		canvas_elem.addEventListener( "mousemove", main_canvas_move, false );

		document.getElementById( "bouton_mouvement" ).addEventListener( "mousedown", gotoAnim1, false );
		document.getElementById( "bouton_cube_rotation" ).addEventListener( "mousedown", gotoAnim2, false );
		document.getElementById( "bouton_mvtsphere" ).addEventListener( "mousedown", gotoAnim3, false );
		document.getElementById( "bouton_mvtsphere2" ).addEventListener( "mousedown", gotoAnim4, false );
		
		document.getElementById( "bouton_cubestop" ).addEventListener( "mousedown", stopCube, false );
		document.getElementById( "bouton_spherestop" ).addEventListener( "mousedown", stopSphere, false );

		_mouse_span = document.getElementById( "mousepos" );
		_info_span = document.getElementById( "info" );
		m_main.append_loop_cb( anim_cb );

		window.onresize = on_resize;
		on_resize();
		load();
	}

	function on_resize() {
		var w = window.innerWidth;
		var h = window.innerHeight;
		m_main.resize(w, h);
	}

	function anim_cb() {
		var t = Math.round( m_main.global_timeline() * 100 );
		var s = "timeline: " + ( t / 100 ) + " sec";
		if ( _my_cube != null ) {
			// m_anim.get_current_frame_float( _my_cube )
			var ph = m_anim.get_frame( _my_cube ) /  m_anim.get_anim_length( _my_cube );
			s += "<br/>anim _my_cube : " + ( Math.round( ph * 100 ) / 100 );
		}
		if ( _my_sphere != null ) {
			// m_anim.get_current_frame_float( _my_sphere )
			var ph = m_anim.get_frame( _my_sphere ) /  m_anim.get_anim_length( _my_sphere );
			s += "<br/>anim _my_sphere : " + ( Math.round( ph * 100 ) / 100 );
		}
		_info_span.innerHTML = s;
	}

	function load() {
		m_data.load( "nlas.json", load_cb );
	}

	function load_cb( data_id ) {
		
		_my_cube = m_scenes.get_object_by_name("Cube");
		_my_sphere = m_scenes.get_object_by_name("Sphere");

		var anims = m_anim.get_anim_names( _my_cube );
		console.log( anims );

		// STANDARD CAMERA CONTROL
		m_app.enable_camera_controls();

	}
	
	function stopCube( e ) {
		m_anim.stop( _my_cube );
		// m_anim.set_frame( _my_cube, 0 );
	}

	function stopSphere( e ) {
		m_anim.stop( _my_sphere );
		// m_anim.set_frame( _my_sphere, 0 );
	}

	function gotoAnim1( e ) { gotoAnim( 0 ); }
	function gotoAnim2( e ) { gotoAnim( 1 ); }
	function gotoAnim3( e ) { gotoAnim( 2 ); }
	function gotoAnim4( e ) { gotoAnim( 3 ); }
	
	function gotoAnim( i ) {
		
		if ( i == 0 ) {
			console.log( "_my_cube mouvement" );
			m_anim.apply( _my_cube, "mouvement" );
			m_anim.set_behavior( _my_cube, m_anim.AB_CYCLIC );
		    m_anim.play( _my_cube );
		} else if ( i == 1 ) {
			console.log( "_my_cube cube_rotation" );
			m_anim.apply( _my_cube, "cube_rotation" );
			m_anim.set_behavior( _my_cube, m_anim.AB_CYCLIC );
		    m_anim.play( _my_cube );
		} else if ( i == 2 ) {
			console.log( "_my_sphere mouvement" );
			m_anim.apply( _my_sphere, "mouvement" );
			m_anim.set_behavior( _my_sphere, m_anim.AB_CYCLIC );
		    m_anim.play( _my_sphere );
		} else if ( i == 3 )  {
			console.log( "_my_sphere mvtsphere" );
			m_anim.apply( _my_sphere, "mvtsphere" );
			m_anim.set_behavior( _my_sphere, m_anim.AB_CYCLIC );
		    m_anim.play( _my_sphere );
		}

	}

	function main_canvas_click( e ) {

		if (e.preventDefault)
		    e.preventDefault();

		var x = e.clientX;
		var y = e.clientY;
		
		_mouse_span.innerHTML = "mouse click: " + x + ", " + y;

	}

	function main_canvas_move( e ) {

		if (e.preventDefault)
		    e.preventDefault();

		var x = e.clientX;
		var y = e.clientY;
		
		_mouse_span.innerHTML = "mouse move: " + x + ", " + y;

	}

});

b4w.require("nlas_main").init();

