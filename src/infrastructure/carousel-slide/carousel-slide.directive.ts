import { animate, AnimationBuilder, AnimationMetadata, AnimationPlayer, style } from '@angular/animations';
import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCarouselSlide]',
})
export class CarouselSlideDirective {

  @HostBinding('class')
  elementClass = 'slide';

  @HostBinding('style.visibility')
  elementVisibility = "hidden";


  private player: AnimationPlayer;
  constructor(private animationBuilder:AnimationBuilder, private el: ElementRef) { }

  public setDisplay(display:boolean){
    if(this.player){
      this.player.destroy();
    }

    const metaData = display ? this.fadeIn() : this.fadeOut();
    const factory = this.animationBuilder.build(metaData);
    this.player = factory.create(this.el.nativeElement);

    this.player.play();
    this.el.nativeElement.style.visibility = display ? "visible" : "hidden";
  }

  private fadeIn():AnimationMetadata[]{
    return [
      style({ opacity: 0 }),
      animate('300ms', style({ opacity: 1 }))
    ]
  }

  private fadeOut():AnimationMetadata[]{
    return [
      style({ opacity: "*" }),
      animate('300ms', style({ opacity: 0 }))
    ]
  }

}
