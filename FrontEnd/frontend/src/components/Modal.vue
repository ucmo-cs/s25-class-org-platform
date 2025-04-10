<template>
    <div class="backdrop">
        <div class="modal">
            <div class="modal-header">
                kill you with tungsten hammers and twelve cars
            </div>
            <div class="modal-body">
                <p>Class Name:</p>
                <input placeholder="I hope you die in a fire" />
                <br>
                <p>Meeting Times:</p>
                <input placeholder="Get some sleep"/>
                <br>
                <p>Teacher's Name:</p>
                <input placeholder="Ashes to ashes"/>
                <br>
                <p>Class Description:</p>
                <input placeholder="Kings rise and fall"/>
                <br>
                <p>Office Hours:</p>
                <input placeholder="Assasians in my eyes"/>
                <br>
                <p>Room Number/Zoom Link:</p>
                <input placeholder="If looks could kill"/>
                <br>
                <p>Instructors Phone Number:</p>
                <input placeholder="You used to call me on my cellphone"/>
                <br>
                <p>Instructors Email:</p>
                <input placeholder="unction"/>
                <br>
                <p>Textbook:</p>
                <input placeholder="heart jumps out of your chest"/>
                <br>
                <p>Start Date:</p>
                <input placeholder="Wake up, its the first of the month"/>
                <br>
                <p>End Date:</p>
                <input placeholder="Chains are off"/>
                <br>
            </div>
            <div class="modal-footer">
                <button @click="$emit('close')">Close</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .modal {
        position: relative;
        width: 1000px;
        height: 700px;
        overflow-y: scroll;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .modal-footer {
        position: relative;
        bottom: 20px;
        left: 20px;
        right: 20px;
        font-family: "Comic Sans MS", "Comic Sans", cursive;
    }

    .modal-header {
        margin-top: 0;
        color: black;
        font-size: x-large;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;

    }
    .modal-body {
        margin: 20px 0;
    }
</style>