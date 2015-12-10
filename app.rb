require 'sinatra'

class Question < Sinatra::Base
  get '/' do
    erb :home
  end

  get '/questions' do
    erb :qst
  end

  get '/answers' do
      erb :ans
  end

  helpers do
      def question_creator(question,count)
          %(
            #{count}.
            #{question}<br>
            <textarea name="_#{count}" textarea class="form-control" rows="3" id="comment#{count}"></textarea><br>
          )
      end

      def page_creator(pgcount)
          if pgcount == 1
              %(
                <li class="active"><a href="#Page#{pgcount}" data-toggle="tab">Page #{pgcount}</a></li>
              )
          else
              %(
                <li><a href="#Page#{pgcount}" data-toggle="tab">Page #{pgcount}</a></li>
              )
          end
      end
  end

end
