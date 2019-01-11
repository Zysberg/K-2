
    AFRAME.registerComponent("rotate", {
        init: function () {
          document.body.onkeyup = (e) => {
          		switch(e.keyCode){
          			case 73: 
                console.log(this.el.components['wasd-controls'])
          					this.el.components['wasd-controls'].yawObject.rotation.x += 5;
          					break;
          			case 75:
          					this.el.components['wasd-controls'].yawObject.rotation.x -= 5;
          					 break;
          			case 74: 
          					this.el.components['wasd-controls'].yawObject.rotation.y += 5;
          					break;
          			case 76:
          					this.el.components['wasd-controls'].yawObject.rotation.y -= 5;
          					 break;
          			default:
          					break;
          		}
          }
        }
    });