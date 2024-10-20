<style>
 #header{
    color: gray;
    margin: 15px 0px 15px 0px;
 }
</style>
@extends('layout')

@section('title', 'Create Company')

@section('content')
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    
    <form action="{{ route('companies.store') }}" method="POST" enctype="multipart/form-data">
        <h3 id="header">Company Information</h3>
        @csrf
        <div class="row">
            <div class="col-sm-6 mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" value="{{ old('name') }}">
            </div>
            <div class="col-sm-6 mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" value="{{ old('email') }}">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 mb-3">
                <label for="logo" class="form-label">Logo</label>
                <input type="file" name="logo" class="form-control">
            </div>
            <div class="col-sm-6 mb-3">
                <label for="website" class="form-label">Website</label>
                <input type="url" name="website" class="form-control" value="{{ old('website') }}">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Create Company</button>
    </form>
@endsection
