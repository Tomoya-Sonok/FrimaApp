class CommentsController < ApplicationController
  
  def create
    @item = Item.find(params[:item_id])
    if Comment.create(comment_params)
      redirect_to item_path(@item), notice: 'コメントされました'
    else
      render :show, notice: 'コメントの送信に失敗しました'
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, item_id: params[:item_id])
  end
  
end
