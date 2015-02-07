"use strict"

if (b4w.module_check("scene_main"))
    throw "Failed to register module: scene_main";

b4w.register("scene_main", function(exports, require) {

var m_anim  = require("animation");
var m_app   = require("app");
var m_main  = require("main");
var m_data  = require("data");
var m_ctl   = require("controls");
var m_phy   = require("physics");
var m_cons  = require("constraints");
var m_scenes   = require("scenes");
var m_trans = require("transform");
var m_cfg   = require("config");

var _character_rig;

var ROT_SPEED = 1.5;
var CAMERA_OFFSET = new Float32Array([0, 1.5, -4]);

exports.init = function() {
    m_app.init({
        canvas_container_id: "canvas3d",
        callback: init_cb,
        physics_enabled: true,
        alpha: false,
        physics_uranium_path: "uranium.js"
    });
}

function init_cb(canvas_elem, success) {

    if (!success) {
        console.log("b4w init failure");
        return;
    }

    m_app.enable_controls(canvas_elem);

    window.onresize = on_resize;
    on_resize();
    load();
    
    
}

function main_loop_callback() {

	var action_frame = m_anim.get_current_frame_float(_character_rig);
    console.log("frame : "+ action_frame );
    	
	
}

function on_resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    m_main.resize(w, h);
};

function load() {
    m_data.load("scene.json", load_cb);
}

function load_cb(root) {
	//m_app.enable_camera_controls();
	
	_character_rig = m_scenes.get_object_by_name("character_armature");
	
	setup_anime()
	
	m_anim.apply(_character_rig, "stand_001");
	m_anim.play(_character_rig);
	m_anim.set_behavior(_character_rig, m_anim.AB_CYCLIC);


	m_main.append_loop_cb(main_loop_callback)

}





function setup_anime() {
    var key_up    = m_ctl.create_keyboard_sensor(m_ctl.KEY_UP);
    var key_down  = m_ctl.create_keyboard_sensor(m_ctl.KEY_ENTER);

    var move_array = [
        key_up,
        key_down
    ];

    var forward_logic  = function(s){return (s[0] || s[1])};
    var backward_logic = function(s){return (s[1] || s[2])};

    function move_cb(obj, id, pulse) {
	
        if (pulse == 1) {
            switch(id) {
            case "WALK":
                m_anim.apply(_character_rig, "walk_001");
		m_anim.set_behavior(_character_rig, m_anim.AB_CYCLIC)
                break;
            case "KICK":
                m_anim.apply(_character_rig, "kick_001");
		m_anim.set_behavior(_character_rig, m_anim.AB_FINISH_STOP);
                break;
            }
        } else {
            m_anim.apply(_character_rig, "stand_001");
        }

        m_anim.play(_character_rig);
        m_anim.set_behavior(_character_rig, m_anim.AB_CYCLIC);
    };

    m_ctl.create_sensor_manifold(_character_rig, "WALK", m_ctl.CT_TRIGGER,
        move_array, forward_logic, move_cb);
    m_ctl.create_sensor_manifold(_character_rig, "KICK", m_ctl.CT_TRIGGER,
        move_array, backward_logic, move_cb);

    
}











});

b4w.require("scene_main").init();
