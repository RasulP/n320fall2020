//SETUP
var canvas = document.getElementById("renderCanvas");
//Goes in the global scope. 
var engine = new BABYLON.Engine(canvas, true);
var camera, mat, sphere, goal, timeoutID, particleSystem;
//Connon Code
// var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
// var physicsPlugin = new BABYLON.CannonJSPlugin();

var scene = createScene();

engine.runRenderLoop(function() {
    // mat.diffuseTexture.uOffset += .01;
    // mat.diffuseTexture.uScale += .05;
    // mat.diffuseTexture.vScale += .08;
    scene.render();

});

scene.registerAfterRender(function() {
    if (sphere.intersectsMesh(goal, false)) {
        // console.log("why tho?");
        goal.position.x = (Math.random() * 8 - 4);

        // //play particles
        particleSystem.manualEmitCOunt = 20;
        particleSystem.start();

        particleSystem.minEmitBox = sphere.position;
        particleSystem.maxEmitBox = sphere.position;
        resetSphere();
    }

})

// _________________________________________________
function createScene() {
    // Create the scene space
    var scene = new BABYLON.Scene(engine);
    scene.enablePhysics(gravityVector, physicsPlugin);


    // camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    // Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(0, 1, -5), scene);
    camera.attachControl(canvas, true);
    var spaceLight = new BABYLON.DirectionalLight("lightly", new BABYLON.Vector3(0, -2, 1), scene);
    // Orb Setup
    sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: .3 }, scene);
    sphere.position = new BABYLON.Vector3(0, 4, 0);
    sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 1.5 }, scene);
    sphere.physicsImpostor.physicsBody.linearDamping = .6;
    sphere.physicsImpostor.physicsBody.angularDamping = .5;

    sphere.tag = "Sphere";
    // BallTexture and lighnting
    mat = new BABYLON.StandardMaterial("base", scene);
    mat.diffuseTexture = new BABYLON.Texture("textures/earth.png", scene); // textures 
    mat.specukarColor = new BABYLON.Color3(0.88, 0.2, 0.28); //shine control
    sphere.material = mat;
    light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);
    //Connon Code Physics
    var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
    var physicsPlugin = new BABYLON.CannonJSPlugin();
    //Physics controls


    // Ground Setup 
    var ground = BABYLON.MeshBuilder.CreateGround("ground", { height: 4, width: 4, subdivisions: 4 }, scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.1 }, scene);
    ground.physicsImpostor.friction = 10;
    // sphere.friction = 2;

    sphere.physicsImpostor.applyForce(
        new BABYLON.Vector3(2, 8, 5), sphere.getAbsolutePosition()
    );

    //goal Marker
    goal = new BABYLON.MeshBuilder.CreateBox("goal", { height: 3, width: 3 }, scene);
    goal.position.z = 3;
    goal.position.y = 1;
    goal.position.x = (Math.random() * 8 - 4);

    // Particle System
    particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem.emitter = new BABYLON.Vector3(0, 0, 0);
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.addVelocityGradient(0, 2);
    // particleSystem.play;
    // particleSystem.position.z = 4;

    // Load particletexture
    particleSystem.particleTexture = new BABYLON.Texture("textures/star.png");
    return scene;

};





function resetSphere() {
    sphere.position = new BABYLON.Vector3(0, 10, 0);
    // velocity rest
    sphere.physicsImpostor.setLinearVelocity(new BABYLON.Vector3());
    sphere.physicsImpostor.setAngularVelocity(new BABYLON.Vector3());

    // remove timeout if active
    clearTimeout(timeoutID);
}



window.addEventListener("click", function() {
    // check wich mesh was clikced
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    if (selectedObject) {
        if (selectedObject.tag == "sphere") {
            // rab clcik direction 
            var pushDir = pickResult.getNormal(true);
            // velocity inverse
            var forceDir = pushDir.scale(-700);


            selectedObject.physicsImpostor.applyForce(
                forceDir,
                selectedObject.getAbsolutePosition();
            )
        }
        // Ball reset after  3 secs
        timeoutID = setTimeout(resetSphere, 3000);
    }
})