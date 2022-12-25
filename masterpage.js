
7475767778798081828384858687888990919293949596979899100101102103104105106107108109
→   [Read·more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)*→  ·@param·{$w.MouseEvent}·event*/export·function·image1_mouseOut(event)·{→   //·This·function·was·added·from·the·Properties·&·Events·panel.·To·learn·more,·visit·http://wix.to/UcBnC-4→   //·Add·your·code·for·this·event·here:·→   →   $w('#adi').hide("fade",fadeOption)}/***→  Adds·an·event·handler·that·runs·when·the·mouse·pointer·is·moved·onto·the·element.·You·can·also·[define·an·event·handler·using·the·Properties·and·Events·panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).→   [Read·more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)*→  ·@param·{$w.MouseEvent}·event*/export·function·hawa_mouseIn(event)·{→   //·This·function·was·added·from·the·Properties·&·Events·panel.·To·learn·more,·visit·http://wix.to/UcBnC-4→   //·Add·your·code·for·this·event·here:·→   $w('#hm').show("fade",fadeOption)}/***→  Adds·an·event·handler·that·runs·when·the·mouse·pointer·is·moved·off·of·the·element.·You·can·also·[define·an·event·handler·using·the·Properties·and·Events·panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).→   [Read·more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)*→  ·@param·{$w.MouseEvent}·event*/export·function·hawa_mouseOut(event)·{→   //·This·function·was·added·from·the·Properties·&·Events·panel.·To·learn·more,·visit·http://wix.to/UcBnC-4→   //·Add·your·code·for·this·event·here:·→   →   $w('#hm').hide("fade",fadeOption)}
// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
… You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
*	 @param {$w.MouseEvent} event
*/
export function hawa_mouseOut(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
		$w('#hm').hide("fade",fadeOption)
}
