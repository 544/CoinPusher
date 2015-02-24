#pragma strict

function OnTriggerEnter (other : Collider) {
		Destroy(other.gameObject);
		score.score += 3;
}