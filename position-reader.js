AFRAME.registerComponent('position-reader', {
  /**
   * We use IIFE (immediately-invoked function expression) to only allocate one
   * vector or euler and not re-create on every tick to save memory.
   */
  tick: (function () {
    var position = new THREE.Vector3();
    var rotation = new THREE.Euler();

    return function () {
      this.el.object3D.getWorldPosition(position);
      console.log(this.el.object3D.getWorldPosition(position));
      // position and rotation now contain vector and euler in world space.
    };
  })
});