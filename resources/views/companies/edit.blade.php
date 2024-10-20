@extends('layout')

@section('title', 'Edit Company')

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

    <form action="{{ route('companies.update', $company->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="row">
            <div class="col-sm-6 mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" value="{{ old('name', $company->name) }}">
            </div>
            <div class="col-sm-6 mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" value="{{ old('email', $company->email) }}">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 mb-3">
                <label for="logo" class="form-label">Logo</label>
                <input type="file" name="logo" class="form-control">
                @if ($company->logo)
                    <img src="{{ asset('storage/' . $company->logo) }}" width="100" height="100" alt="Logo">
                @endif
            </div>
            <div class="col-sm-6 mb-3">
                <label for="website" class="form-label">Website</label>
                <input type="url" name="website" class="form-control" value="{{ old('website', $company->website) }}">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Update Company</button>
    </form>
@endsection
